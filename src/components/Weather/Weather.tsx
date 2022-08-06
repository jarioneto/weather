import React from 'react';
import Image from 'next/image';
import Button from 'components/Button';
import { SectionLoader } from 'components/Loader';
import WeatherAttribute from 'components/WeatherAttribute';
import Wind from 'components/Icons/Wind';
import Humidity from 'components/Icons/Humidity';
import Temperature from 'components/Icons/Temperature';
import { Weather as WeatherType } from 'types';

import * as S from './styles';

/* -------------------------------------------------------------------------------------------------
 * WeatherDetails
 * -----------------------------------------------------------------------------------------------*/

interface WeatherDetailsProps {
  details: WeatherType;
}

const WeatherDetails = ({ details }: WeatherDetailsProps): JSX.Element => {
  const temperature = `${Math.round(details.main.temp)}°`;
  const temperatureMax = `${Math.round(details.main.temp_max)}°`;
  const humidity = `${details.main.humidity}%`;
  const wind = `${Math.round(details.wind.speed * 3.6)} km/h`;
  const weatherDescription = details.weather[0].description;
  const weatherIcon = details.weather[0].icon;

  return (
    <S.Content>
      <S.Typography size="large">
        {details.name}, {details.sys.country}
      </S.Typography>
      <S.Box direction="column">
        <S.Box align="center">
          <Image
            src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt={weatherDescription}
            width={58}
            height={60}
          />
          <S.Typography>{weatherDescription}</S.Typography>
        </S.Box>
        <S.Typography size="extraLarge2">{temperature}</S.Typography>
      </S.Box>
      <S.ListAttributes>
        <WeatherAttribute label="ventos" text={wind} icon={<Wind />} />
        <WeatherAttribute label="umidade" text={humidity} icon={<Humidity />} />
        <WeatherAttribute label="maxíma" text={temperatureMax} icon={<Temperature />} />
      </S.ListAttributes>
    </S.Content>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Weather
 * -----------------------------------------------------------------------------------------------*/

interface WeatherProps {
  isLoading: boolean;
  weather: WeatherType | null;
  onClick: () => void;
}

const Weather = ({ isLoading, weather, onClick }: WeatherProps): JSX.Element => {
  return (
    <S.Container>
      <S.Section>
        <S.Title>
          Dados da sua <span>Região</span>
        </S.Title>
        <Button isLoading={isLoading} loadingText="Carregando..." onClick={onClick}>
          Atualizar dados
        </Button>
      </S.Section>
      <S.Section>
        {isLoading && <SectionLoader />}
        {!isLoading && weather && <WeatherDetails details={weather} />}
      </S.Section>
    </S.Container>
  );
};

export default Weather;
