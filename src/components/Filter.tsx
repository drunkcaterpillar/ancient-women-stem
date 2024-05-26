import React from 'react';
import { useTranslation } from 'react-i18next';

const Filter: React.FC<{ onFilter: (subject: string) => void }> = ({
  onFilter,
}) => {
  const { t } = useTranslation();
  const subjects = [
    t('Mathematics'),
    t('Astronomy'),
    t('Physics'),
    t('Chemistry'),
    t('Biology'),
  ];

  return (
    <div>
      <select onChange={e => onFilter(e.target.value)}>
        <option value="">{t('All Subjects')}</option>
        {subjects.map(subject => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
