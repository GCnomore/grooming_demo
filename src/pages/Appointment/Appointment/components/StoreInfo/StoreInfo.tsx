import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faCircleInfo,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';

import * as Styled from "./StoreInfo.styled";
import IStore from "../../../../../data/models/store.model";
import upperAllFirst from "../../../../../util/upperAllFirst";
interface StoreInfoProps {
  store: IStore;
}

dayjs.extend(customParseFormat);

const StoreInfo: React.FC<StoreInfoProps> = ({ store }) => {
  const petAcceptance = useCallback(():string => {
    if (store.petLimit.all) {
      return "Accepts all pets (No size/wieght limit)";
    } else {
      return `Accepts pets under: ${store.petLimit.limit}lb`;
    }
  }, [store.petLimit]);

  const parseOpenHours = (): string => {
    const result: string[] = [];
    const hours = store.hours[dayjs().format('ddd').toLowerCase()];

    if(hours === 'Closed') {
      return 'Closed'
    }

    const tempArr = hours.split('-');

    if(Number(tempArr[0]) < 13) {
      result.push(`${tempArr[0]}AM`);
      result.push('-');
    } else {
      result.push(`${Number(tempArr[0]) - 12}PM`);
      result.push('-');
    }

    if(Number(tempArr[1]) < 13) {
      result.push(`${tempArr[1]}AM`);
    } else {
      result.push(`${Number(tempArr[1]) - 12}PM`);
    }

    return result.join('');
  }

  return (
    <Styled.Container>
      <Styled.MapSection>
        <Map
          mapLib={import('mapbox-gl')}
          mapboxAccessToken={import.meta.env.VITE_REACT_APP_MAP_KEY}
          initialViewState={{
            longitude: Number(store.lng),
            latitude: Number(store.lat),
            zoom: 14
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          style={{borderRadius: '9px'}}
        />
      </Styled.MapSection>
      <Styled.StoreInfoSection>
        <h2>{upperAllFirst(store.name)}</h2>
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="w-4 mr-2" />
          <span className="text-sm">
            {store.address.street} {store.address.street2}
          </span>
        </div>
        <div>
          <span className="text-sm ml-6">
            {store.address.city}, {store.address.state} {store.address.zip}
          </span>
        </div>

        <div className="mt-1">
          <FontAwesomeIcon icon={faClock} className="w-4 mr-2" />
          <span>
            Today: {parseOpenHours()}
          </span>
        </div>

        <div className="mt-1">
          <FontAwesomeIcon icon={faPhone} className="w-4 mr-2" />
          <a className="text-sm" href={`tel:+${store.phone}`}>{store.phone}</a>
        </div>

        <div className="mt-1">
          <FontAwesomeIcon icon={faCircleInfo} className="w-4 mr-2" />
          <span className="text-sm">
            {petAcceptance()}
          </span>
        </div>
      </Styled.StoreInfoSection>
    </Styled.Container>
  );
};

export default StoreInfo;
