export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: TrailerData;
}

interface TrailerData {
  480: string;
  max: string;
}
