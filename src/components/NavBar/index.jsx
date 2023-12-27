import { useQuery } from '@tanstack/react-query';
import { OrderAPI } from '@/api';
import IconMenu from '@/assets/icons/menu.svg';

import './style.scss';

const NavBar = () => {
  const onToggleMenu = () => {
    console.log('@ on Toggle Menu');
  };

  const token = '070a72da125ee371f7befff03cfeebf0';
  const { data, isLoading, error } = useQuery({
    queryKey: ['getReservationOrders'],
    queryFn: () =>
      OrderAPI.getReservationOrders({
        access_token: token
      })
  });
  console.log('@isLoading', isLoading);
  console.log('@error', error);
  console.log('@data', data?.data?.data);

  return (
    <header className="flex w-full px-6 py-4 items-center h-header">
      <img src={IconMenu} alt="icon-menu" className="cursor-pointer" onClick={onToggleMenu} />
      <div>logo</div>
      <div>職人助理</div>
    </header>
  );
};

export default NavBar;
