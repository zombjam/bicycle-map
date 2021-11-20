import ajax from './ajax';

const initBikeStation = {
  $select: 'StationUID,StationName,StationPosition,StationAddress',
};

const initBikeAvailability = {
  $select: 'StationUID,ServiceStatus,AvailableRentBikes,AvailableReturnBikes',
};

// [自行車] 指定範圍租借站位資料
function getStationNearby(params) {
  return ajax(`/Bike/Station/Nearby`, { ...initBikeStation, ...params });
}
// [自行車] 指定範圍即時車位資料
function getAvailabilityNearby(params = {}) {
  return ajax(`/Bike/Availability/Nearby`, { ...initBikeAvailability, ...params });
}

export async function getBikeStation(params) {
  const [bikeStations, bikeAvailability] = await Promise.all([getStationNearby(params), getAvailabilityNearby(params)]);

  return bikeStations.map((station, index) => ({
    ...station,
    StationName: station.StationName.Zh_tw.replace(/(YouBike1.0_|YouBike2.0_)/g, ''),
    StationAddress: station.StationAddress.Zh_tw,
    ...bikeAvailability[index],
    // ...bikeAvailability.find(availability => availability.StationUID === station.StationUID),
  }));
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
export async function getScenicSpot(params) {
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
export async function getRestaurant(params) {
  return ajax(`/Tourism/Restaurant`, { ...initRestaurant, ...params }).then(res =>
    res.map(item => {
      const { Class, Picture, ...data } = item;
      const Tags = Class ? [Class] : [];
      return { ...data, Tags, Picture: Picture?.PictureUrl1 };
    })
  );
}
