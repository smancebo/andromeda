
import { XORCipher } from '../utils/XORCipher';
import { Security } from '../../config/security';


export class AppCredentials {
  username: string;
  token: string;

  static Get(): AppCredentials  {
    const storedCredentials = sessionStorage.getItem('app-settings') || '';
    if (storedCredentials !== '') {
      const credentials = JSON.parse(new XORCipher().decode(Security.KEY, storedCredentials));
      return credentials;
    }
    return new AppCredentials();
  }

  static Set(credentials: AppCredentials): void  {
    if (credentials) {
      const enc_credentials = new XORCipher().encode(Security.KEY, JSON.stringify(credentials));
      sessionStorage.setItem('app-settings', enc_credentials);
    }
  }

  static Clear(): void  {
    sessionStorage.removeItem('app-settings');
  }
}
