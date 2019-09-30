import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetroService {
  constructor() {}

  async getStationInformation(stationCode: string) {
    try {
      const response = await axios.get(
        environment.stationInformation + '?StationCode=' + stationCode
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getArrivalTimes(stationCode: string) {
    try {
      const response = await axios.get(
        environment.arrivalTimes + '?StationCode=' + stationCode
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getStationHours(stationCode: string) {
    try {
      const response = await axios.get(
        environment.stationHours + '?StationCode=' + stationCode
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getStationRoute(lineCode: string) {
    try {
      const response = await axios.get(
        environment.stationRoute + '?LineCode=' + lineCode
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getStationList(lineCode: string) {
    try {
      const response = await axios.get(
        environment.stationList + '?LineCode=' + lineCode
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
