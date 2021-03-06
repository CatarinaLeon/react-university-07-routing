import { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocalStorage } from 'react-use';
import { toast } from 'react-toastify';

import AddForm from '../common/AddForm/AddForm';
import BigButton from '../common/BigButton/BigButton';
import DeleteCard from '../common/DeleteCard/DeleteCard';
import ErrorMsg from '../common/ErrorMsg/ErrorMsg';
import EditCard from '../common/EditCard/EditCard';
import Filter from '../common/Filter/Filter';
import Modal from '../common/Modal/Modal';
import Loader from '../common/Loader/Loader';
import ItemsList from '../ItemsList/ItemsList';

// import * as storage from '../../services/localStorage';
import * as api from 'services/api';

import addIcon from 'images/add.svg';
import pencilIcon from 'images/pencil.png';
import fingerIcon from 'images/finger.png';

const API_ENDPOINT = 'cities';

const ACTION = {
  NONE: 'none',
  ADD: 'add',
  EDIT: 'edit',
  DELETE: 'delete',
};

const FILTER_KEY = 'filter';

const CitiesBlock = () => {
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useLocalStorage(FILTER_KEY, '');
  // const [filter, setFilter] = useState(() => storage.get(FILTER_KEY) ?? '');
  // form / modal
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [openedModal, setOpenedModal] = useState(ACTION.NONE);
  // actions
  const [action, setAction] = useState(ACTION.NONE);
  const [activeCity, setActiveCity] = useState(null);
  // api request status
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // GET CITIES

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      setError(null);
      try {
        const cities = await api.getData(API_ENDPOINT);
        setCities(cities);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, []);

  // ADD CITY

  const toggleAddForm = () => setIsAddFormOpen(prevState => !prevState);

  const confirmAdd = cityName => {
    const isDuplicate = checkIfDuplicate(cityName);
    if (isDuplicate) {
      toast.warn(`City "${cityName}" is already in list`);
      return;
    }
    setActiveCity({ name: cityName });
    setAction(ACTION.ADD);
  };

  const checkIfDuplicate = cityName =>
    cities.some(({ name }) => name === cityName);

  useEffect(() => {
    if (action !== ACTION.ADD || !activeCity) return;

    const addCity = async () => {
      setLoading(true);
      setError(null);
      try {
        const newCity = await api.saveItem(API_ENDPOINT, activeCity);
        setCities(prevCities => [...prevCities, newCity]);
        toggleAddForm();
      } catch (error) {
        setError(error.message);
      } finally {
        setAction(ACTION.NONE);
        setActiveCity(null);
        setLoading(false);
      }
    };
    addCity();
  }, [action, activeCity]);

  // EDIT CITY

  const handleStartEdit = useCallback(activeCity => {
    setActiveCity(activeCity);
    setOpenedModal(ACTION.EDIT);
  }, []);

  const confirmEdit = editedCityName => {
    if (editedCityName === activeCity.name) {
      closeModal();
      return;
    }
    setAction(ACTION.EDIT);
    setActiveCity({ ...activeCity, name: editedCityName });
  };

  useEffect(() => {
    if (action !== ACTION.EDIT) return;

    const editCity = async () => {
      setLoading(true);
      setError(null);
      try {
        const updatedCity = await api.editItem(API_ENDPOINT, activeCity);
        setCities(prevCities =>
          prevCities.map(city =>
            city.id === updatedCity.id ? updatedCity : city,
          ),
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setAction(ACTION.NONE);
        closeModal();
        setLoading(false);
        setActiveCity(null);
      }
    };
    editCity();
  }, [action, activeCity]);

  // DELETE CITY

  const handleStartDelete = useCallback(activeCity => {
    setActiveCity(activeCity);
    setOpenedModal(ACTION.DELETE);
  }, []);

  const confirmDelete = () => setAction(ACTION.DELETE);

  useEffect(() => {
    if (action !== ACTION.DELETE) return;

    const deleteCity = async () => {
      setLoading(true);
      setError(null);
      try {
        const deletedCity = await api.deleteItem(API_ENDPOINT, activeCity.id);
        setCities(prevCities =>
          prevCities.filter(city => city.id !== deletedCity.id),
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setAction(ACTION.NONE);
        closeModal();
        setLoading(false);
        setActiveCity(null);
      }
    };
    deleteCity();
  }, [action, activeCity]);

  const closeModal = () => {
    setOpenedModal(ACTION.NONE);
    setActiveCity(null);
  };

  // FILTER CITIES

  // useEffect(() => {
  //   storage.save(FILTER_KEY, filter);
  // }, [filter]);

  // RENDER
  const filteredCities = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return cities.filter(city =>
      city.name.toLowerCase().includes(normalizedFilter),
    );
  }, [cities, filter]);

  // const getFilteredCities = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return cities.filter(city =>
  //     city.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const filteredCities = getFilteredCities();

  const noCities = !loading && !cities.length;

  // Fix filter bug
  useEffect(() => {
    if (cities.length === 1) {
      setFilter('');
    }
  }, [cities.length, setFilter]);

  return (
    <>
      {loading && <Loader />}

      {cities.length > 1 && (
        <Filter
          label="?????????? ????????????:"
          value={filter}
          onFilterChange={setFilter}
        />
      )}

      {!!filteredCities.length && (
        <ItemsList
          items={filteredCities}
          onEditItem={handleStartEdit}
          onDeleteItem={handleStartDelete}
        />
      )}

      {noCities && <h4 className="absence-msg">No cities yet</h4>}

      {isAddFormOpen && (
        <AddForm
          onSubmit={confirmAdd}
          formName="???????????????????? ????????????"
          placeholder="??????????"
        />
      )}

      {error && <ErrorMsg message={error} />}

      <BigButton
        text={isAddFormOpen ? '???????????????? ????????????????????' : '???????????????? ??????????'}
        icon={!isAddFormOpen && addIcon}
        onClick={toggleAddForm}
        disabled={loading}
      />

      {openedModal === ACTION.EDIT && (
        <Modal
          title="?????????????????????????? ???????????????????? ?? ????????????"
          onClose={closeModal}
          icon={pencilIcon}
        >
          <EditCard
            label="??????????"
            inputValue={activeCity.name}
            onSave={confirmEdit}
          />
        </Modal>
      )}

      {openedModal === ACTION.DELETE && (
        <Modal title="???????????????? ????????????" onClose={closeModal} icon={fingerIcon}>
          <DeleteCard
            text="?????????? ?????????????? ?????? ?????????????????? ?? ???????????????????? ?? ????????????."
            onDelete={confirmDelete}
            onClose={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

export default CitiesBlock;
