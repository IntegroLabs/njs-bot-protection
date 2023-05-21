import { OpenAIModel } from './openai';

export interface Message {
  id: number;
  role: Role;
  content: string;
}

export interface LLMMessage {
  role: Role;
  content: string;
}

export type Role = 'assistant' | 'user' | 'system';

export interface ChatBody {
  model: OpenAIModel;
  messages: Message[];
  temperature: number;
}

export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  messages: Message[];
  model: OpenAIModel | null;
  model_name: string;
  model_type: string;
  prompt: string;
  temperature: number;
  last_message: string | null;
  folderId: string | null;
}
