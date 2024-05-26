import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Search: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState('');
  const { t } = useTranslation();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={t('Search women in STEM...')}
      />
      <button type="submit">{t('Search')}</button>
    </form>
  );
};

export default Search;
