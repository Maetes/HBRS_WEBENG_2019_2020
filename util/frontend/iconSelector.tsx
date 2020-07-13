import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReply,
  faExclamationTriangle,
  faTag,
  faBus,
  faCar,
  faMotorcycle,
  faBicycle,
  faTrain,
  faCalendarAlt,
  faEdit,
  faInfoCircle,
  faCheckCircle,
  faTimesCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

import React from 'react';

interface Props {
  count: number;
  destinct?: string;
  classIcon?: string;
  color?: string;
}

const Icon = (props: Props) => {
  const { count, destinct, classIcon = '', color } = props;
  let obj = [];

  switch (destinct) {
    case 'reset':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon icon={faReply} key={i} className={classIcon} />
        );
      }
      return <>{obj}</>;
    case 'price':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon
            icon={faTag}
            key={i}
            className={classIcon}
            color={color}
          />
        );
      }
      return <>{obj}</>;
    case 'bus':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon
            icon={faBus}
            key={i}
            className={classIcon}
            color={color}
          />
        );
      }
      return <>{obj}</>;
    case 'car':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon
            icon={faCar}
            key={i}
            className={classIcon}
            color={color}
          />
        );
      }
      return <>{obj}</>;
    case 'bicycle':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon
            icon={faBicycle}
            key={i}
            className={classIcon}
            color={color}
          />
        );
      }
      return <>{obj}</>;
    case 'motorbike':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon
            icon={faMotorcycle}
            key={i}
            className={classIcon}
            color={color}
          />
        );
      }
      return <>{obj}</>;
    case 'train':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon
            icon={faTrain}
            key={i}
            className={classIcon}
            color={color}
          />
        );
      }
      return <>{obj}</>;
    case 'security':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            key={i}
            className={classIcon}
            color={color}
          />
        );
      }
      return <>{obj}</>;
    case 'duration':
      for (let i = 0; i < count; ++i) {
        let j = i + 100;
        obj.push(
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className={classIcon}
            color={color}
          />
        );
      }
      return <>{obj}</>;
    case 'edit':
      for (let i = 0; i < count; ++i) {
        let j = i + 100;
        obj.push(
          <FontAwesomeIcon
            icon={faEdit}
            className={classIcon}
            color={color}
            key={i}
          />
        );
      }
      return <>{obj}</>;
    case 'info':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon
            icon={faInfoCircle}
            className={classIcon}
            color={'white'}
            key={i}
          />
        );
      }
      return <>{obj}</>;
    case 'success':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={classIcon}
            color={'white'}
            key={i}
          />
        );
      }
      return <>{obj}</>;
    case 'alert':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon
            icon={faTimesCircle}
            className={classIcon}
            color={'white'}
            key={i}
          />
        );
      }
      console.log(obj);
      return <>{obj}</>;
    case 'warning':
      for (let i = 0; i < count; ++i) {
        obj.push(
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className={classIcon}
            color={'white'}
            key={i}
          />
        );
      }
      return <>{obj}</>;
    default:
      return <div></div>;
  }
};

export default Icon;
