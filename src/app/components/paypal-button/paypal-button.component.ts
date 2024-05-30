import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PaypalService } from '../../services/paypal.service';

@Component({
  selector: 'app-paypal-button',
  standalone: true,
  imports: [],
  templateUrl: './paypal-button.component.html',
  styleUrl: './paypal-button.component.scss'
})
export class PaypalButtonComponent implements OnInit, AfterViewInit {

  constructor(private paypalService: PaypalService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.paypalService.loadPaypalScript().then(paypal => {
      paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'EUR', // Währung hier anpassen
                value: '0.01' // Betrag in der entsprechenden Währung
              }
            }]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Weiterverarbeitung der Zahlungsinformationen
          });
        }
      }).render('#paypal-button-container');
    }).catch((error) => {
      console.error('PayPal Script konnte nicht geladen werden.', error);
    });
  }
}
