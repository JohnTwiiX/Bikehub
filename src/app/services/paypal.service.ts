import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {
  loadPaypalScript(): Promise<any> {
    return new Promise((resolve, reject) => {
      if ((window as any).paypal) {
        resolve((window as any).paypal);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=Adcpgr-Dpz8QmJU6-hJzG1Xe5gpO1Tl5BMqabJI9C6H1TaW1tlTG79lxBGi-1CGD6JEeGT3eNA8_Wu7W&currency=EUR';
      script.onload = () => resolve((window as any).paypal);
      script.onerror = (error: any) => reject(error);
      document.body.appendChild(script);
    });
  }
}
