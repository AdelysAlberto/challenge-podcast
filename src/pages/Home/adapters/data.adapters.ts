import { ICard, IPodCastList } from '../interfaces/index';

export const cardAdapter = (data: IPodCastList): ICard => {
  return {
    title: data.title.label,
    image: data['im:image'].slice(-1)[0].label,
    id: data.id.label,
    author: data['im:artist'].label,
  }

}