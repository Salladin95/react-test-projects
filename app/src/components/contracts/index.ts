export type RouteOption = '/' | 'form' | 'result';

export type RouteFn = () => JSX.Element;
export interface IGood {
  id: number;
  title: string;
  price: number;
  rest: number;
  cnt: number;
}

export type UpdateValueFn = (name: string, value: string, valid: boolean) => void;

export type Settings = { lang: 'ru' | 'en' };

export type CurrentLanguageProps = {
  updateCurrentLanguage: (settings: Settings) => void;
};
