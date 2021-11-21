import ajax from './ajax';
import { getDistance } from 'geolib';
import { format } from 'date-fns';

const initBikeStation = {
  $select: 'StationUID,StationName,StationPosition,StationAddress',
};

const initBikeAvailability = {
  $select: 'StationUID,ServiceStatus,AvailableRentBikes,AvailableReturnBikes',
};

// [自行車] 指定範圍租借站位資料
function loadStationNearby(params) {
  return ajax(`/Bike/Station/Nearby`, { ...initBikeStation, ...params });
}
// [自行車] 指定範圍即時車位資料
function loadAvailabilityNearby(params = {}) {
  return ajax(`/Bike/Availability/Nearby`, { ...initBikeAvailability, ...params });
}

export async function loadBikeStation(params, latlng) {
  // console.log('latlng: ', latlng);
  if (!latlng) return;
  const [lat, lng] = latlng;
  const [bikeStations, bikeAvailability] = await Promise.all([loadStationNearby(params), loadAvailabilityNearby(params)]);
  try {
    return bikeStations.map((station, index) => ({
      ...station,
      StationName: station.StationName.Zh_tw.replace(/(YouBike1.0_|YouBike2.0_)/g, ''),
      StationAddress: station.StationAddress.Zh_tw,
      ...(bikeAvailability || [])[index],
      UpdateTime: formattedDate(new Date(station.UpdateTime)),
      distance: getDistance(
        { latitude: lat, longitude: lng },
        { latitude: station.StationPosition.PositionLat, longitude: station.StationPosition.PositionLon }
      ),
    }));
  } catch (e) {
    console.log(e);
    return [];
  }
}

const initShape = {
  $select: 'RouteName,City,RoadSectionStart,RoadSectionEnd,CyclingLength',
};

// [路線] 指定縣市之自行車道圖資
export async function getCyclingShape(city = 'NewTaipei') {
  return ajax(`/Cycling/Shape/${city}`, { ...initShape, $top: 30 });
}

const initScenicSpot = {
  $select: 'Name,DescriptionDetail,City,Phone,Address,Picture,OpenTime,Position,WebsiteUrl,Class1,Class2,Class3',
  $filter: 'Picture/PictureUrl1 ne null',
};
// [景點] 景點資料
export async function loadScenicSpot(params) {
  return ajax(`/Tourism/ScenicSpot`, { ...initScenicSpot, ...params }).then(res =>
    res.map(item => {
      const { Class1, Class2, Class3, Picture, DescriptionDetail: Description, ...data } = item;
      const Tags = [Class1, Class2, Class3].filter(x => !!x);
      return { ...data, Tags, Description, Picture: Picture?.PictureUrl1 };
    })
  );
}

const initRestaurant = {
  $select: 'Name,Description,City,Phone,Address,Picture,OpenTime,Position,WebsiteUrl,Class',
  // $top: 30,
};
// [餐廳]
export async function loadRestaurant(params) {
  return ajax(`/Tourism/Restaurant`, { ...initRestaurant, ...params }).then(res =>
    res.map(item => {
      const { Class, Picture, ...data } = item;
      const Tags = Class ? [Class] : [];
      return { ...data, Tags, Picture: Picture?.PictureUrl1 };
    })
  );
}

function formattedDate(date, formatStr = 'HH:mm') {
  return format(date, formatStr);
}
