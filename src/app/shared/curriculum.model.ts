export class PersonalData {
  firstName: string;
  lastName: string;
  bornDate: string;
  phone: string;
  photo: string;
  availableToTravel: boolean;
  civilStatus: string;
  email: string;
}

export class Profile {
  title: string;
  description: string;
}

export class Study {
  type: string;
  title: string;
  place?: string;
  from?: string;
  to?: string;
  level?: string;
  graduated?: boolean;
}

export class Education {
  title: string;
  studies: Study[];
}

export class Skill {
  icon: string;
  level: number;
  values: string[];
}

export class Skills {
  title: string;
  skills: Skill[];
}

export class Reference {
  name: string;
  phone: string;
  title: string;
}

export class References {
  title: string;
  references: Reference[];
}

export class InformationDetails {
  title?: string;
  text: string;
  date?: string;
}

export class Information {
  title: string;
  description?: string;
  informationDetails: InformationDetails[];
}

export class Curriculum {
  personalData: PersonalData;
  profile: Profile;
  education: Education;
  skills: Skills;
  experience: Information;
  achievements: Information;
  personalReferences?: References;
  workReferences?: References;
}
