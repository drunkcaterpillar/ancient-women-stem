import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Map from './Map';
import Search from './Search';
import Filter from './Filter';
import { womenInStem, WomanInStem } from '../data/womenInStem';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSubject, setFilterSubject] = useState('');

  const filteredWomen = womenInStem.filter(woman => {
    const matchesSearch = woman.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filterSubject
      ? woman.subject === filterSubject
      : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <h1>{t('Ancient Women in STEM')}</h1>
      <Search onSearch={setSearchQuery} />
      <Filter onFilter={setFilterSubject} />
      <Map women={filteredWomen} />
    </div>
  );
};

export default HomePage;
