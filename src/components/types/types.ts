export interface I_Poke {
  name: string;
  url: string;
  skills: I_Skills[];
  types: I_Type[];
}

interface I_Skills {
  skill: {
    name: string;
  };
}

interface I_Type {
  type: {
    name: string;
  };
}

export interface I_States {
  elemList: I_Poke[];
  input: string;
  isLoad: boolean;
  isBreak: boolean;
}
