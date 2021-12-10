import { getNoun } from '../utils/getNoun';

interface RawData {
  data: Datum[];
}

interface Datum {
  groups: Direction[];
  direction: Direction;
}

interface Direction {
  id: string;
  link: string;
  badge: Badge;
  title: string;
  items?: Direction[];
}

interface Badge {
  text: Level;
  color: Color;
  bgColor: BgColor;
}

enum BgColor {
  d8ffe5 = '#D8FFE5',
  e04d7e = '#E04D7E',
  e6f0ff = '#E6F0FF',
  edfbf6 = '#EDFBF6',
  fde9f1 = '#FDE9F1',
  ffe4e4 = '#FFE4E4',
}

enum Color {
  e62b69 = '#E62B69',
  eb236b = '#EB236B',
  ffffff = '#FFF',
  the0066ff = '#0066FF',
  the35d252 = '#35D252',
  the47c397 = '#47C397',
}

enum Level {
  Empty = '',
  NEO = 'НЕО',
  PRO = 'ПРО',
  TOP = 'ТОП',
}

export interface Item {
  title: string,
  itemsCount: string,
}

/**
 * Get data from API.
 */
export async function getData(): Promise<Item[]> {
  const response = await fetch('https://raw.githubusercontent.com/netology-code/ajs-task/master/netology.json');

  const { data }: RawData = await response.json();

  return data.map(({ groups, direction }) => {
    const count = groups.reduce((prevCount, group) => prevCount + group.items.length, 0);
    const itemsCount = getNoun(count, 'курс', 'курса', 'курсов');
    return {
      title: direction.title,
      itemsCount: `${count} ${itemsCount}`,
    };
  });
}
