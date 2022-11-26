import React from 'react';
import { EventCard } from './components/EventCard/EventCard';
// @ts-ignore
import styles from './AdminPage.module.scss';

const data = [
  {
    name: 'Event1',
    desc: 'desc1',
    statistic: '1',
  },
  {
    name: 'Event2',
    desc: 'desc2',
    statistic: '2',
  },
  {
    name: 'Event3',
    desc: 'desc3',
    statistic: '3',
  },
  {
    name: 'Event4',
    desc: 'desc4',
    statistic: '4',
  },
  {
    name: 'Event5',
    desc: 'desc5',
    statistic: '5',
  },
];

const AdminPage = () => {
  return (
    <div className={styles.AdminPageContainer}>
      {data.length > 0 &&
        data.map((value) => (
          <EventCard
            name={value.name}
            desc={value.desc}
            statistic={value.statistic}
          />
        ))}
    </div>
  );
};

export default AdminPage;
