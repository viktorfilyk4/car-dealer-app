export type GetVehiclesResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleResult[];
};

export type VehicleResult = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};
