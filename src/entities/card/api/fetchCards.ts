import axios from 'axios';
import { Card } from '../ui/Card';

export const fetchCards = async (): Promise<Card[]> => {
  const response = await axios.get<Card[]>('https://run.mocky.io/v3/dd13a2d7-74dc-4802-a946-1798be26fa8a');
  return response.data;
};