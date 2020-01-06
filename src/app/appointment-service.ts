import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  getAvailableAppointments(): Appointment[] {
    return [new Appointment(), new Appointment()]
  }

}