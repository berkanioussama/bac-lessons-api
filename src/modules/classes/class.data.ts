export interface IClass {
  id: string;
  name: string;
  engName: string;
  tag: string;
}

export const classesData: IClass[] = [
  {
    id: "i", tag: "حفظ",
    name: "العلوم الإسلامية", engName: "islamic-science",
  },
  {
    id: "h", tag: "حفظ",
    name: "تاريخ", engName: "history"
  },
  {
    id: "g", tag: "حفظ",
    name: "جغرافيا", engName: "geography"
  },
  {
    id: "p", tag: "حفظ",
    name: "فلسفة", engName: "philosophy"
  },
  /*{
    id: "m", tag: "فهم",
    name: "الرياضيات", engName: "mathematics"
  },
  {
    id: "s", tag: "فهم",
    name: "العلوم", engName: "science"
  },
  {
    id: "f", tag: "فهم",
    name: "الفيزياء", engName: "physics"
  },
  {
    id: "a", tag: "لغة",
    name: "اللغة العربية", engName: "arabic"
  },
  {
    id: "e", tag: "لغة",
    name: "اللغة الإنجليزية", engName: "english"
  },
  {
    id: "f", tag: "لغة",
    name: "اللغة الفرنسية", engName: "french"
  },*/
];
