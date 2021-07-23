
export interface ConflictContent {
  header: string;
  position: number[];
  description: string;
  sequence: SequenceItem[];
  scene: SceneElement[];
  situationSpeech: string;
  options: string[];
  reactions: ConflictReaction[];
}

export interface SceneElement {
  image?: string;
  type?: SceneElementType;
  position?: [number, number];
  scale?: number;
  flipped: boolean;
  pose: AvatarPose;
}

export enum SceneElementType {
  sprite = "sprite",
  avatar = "avatar",
}

export enum AvatarPose {
  angle = "angle",
  front = "front",
  side = "side",
  angry = "angry"
}

export interface ConflictReaction { 
  correct: boolean, 
  text: string, 
  scene: SceneElement[]; 
  confirmText: string,
  yesText: string;
  noText: string;
  confirmImage?: string 
}

export enum SequenceItemType {
  caption = 'caption',
  speech = 'speech',
  image = 'image',  // image, no speech
}

export interface SequenceItem {
  type: SequenceItemType,
  text: string,
  balloonArrowPos?: number;
  
  scene?: SceneElement[]; // optional override
}