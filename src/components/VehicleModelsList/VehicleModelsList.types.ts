export type VehicleModelResult = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

export type GetModelsReponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleModelResult[];
};
