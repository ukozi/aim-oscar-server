import BaseService from './base';
import Communicator from '../communicator';

export default class DirectorySearch extends BaseService {
  constructor(communicator : Communicator) {
    super({family: 0x0f, version: 0x01}, communicator)
  }
}