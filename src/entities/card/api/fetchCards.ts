import axios from 'axios';
import { Card } from '../ui/Card';

export const fetchCards = async (): Promise<Card[]> => {
  const response = await axios.get<Card[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};