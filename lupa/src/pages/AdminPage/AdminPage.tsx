import React from 'react';
import { EventCard } from './components/EventCard/EventCard';
// @ts-ignore
import styles from './AdminPage.module.scss';

const data = [
  {
    name: 'Event1',
    desc: 'desc1',
  },
  {
    name: 'Event2',
    desc: 'desc2',
  },
  {
    name: 'Event3',
    desc: 'desc3',
  },
  {
    name: 'Event4',
    desc: 'desc4',
  },
  {
    name: 'Event5',
    desc: 'desc5',
  },
];

const AdminPage = () => {
  return (
    <div className={styles.AdminPageContainer}>
      {data.length > 0 &&
        data.map((value) => <EventCard name={value.name} desc={value.desc} />)}
    </div>
  );
};

export default AdminPage;
