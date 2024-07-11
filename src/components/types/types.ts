export interface I_Poke {
  name: string;
  url: string;
  skills: I_Skills[];
  type: I_Type[];
}

interface I_Skills {
  skills: {
    name: string;
  };
}

interface I_Type {
  type: {
    name: string;
  };
}
