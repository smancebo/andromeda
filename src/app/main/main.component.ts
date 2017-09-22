import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppCredentials } from '../shared/models/app-credentials';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  username: string;
  constructor(private $router: Router) { }

  ngOnInit() {
    this.username = AppCredentials.Get().username;
  }

  ngAfterViewInit() {
    const component = this;
    const width = $(window).width();
    this.checkXs(width);
    $(window).on('resize', function(){
      component.checkXs($(this).width());
    });
  }

  private checkXs(width) {
    if (width < 768) {
      // $('.menu').addClass('closed');
      // $('.content').addClass('no-menu');
      // $('.menu-show').removeClass('closed');
      this.closeMenu();
    } else {
        $('.menu').removeClass('closed');
        $('.content').removeClass('no-menu');
        $('.menu-show').addClass('closed');
    }
  }

  logOff() {
    AppCredentials.Clear();
    this.$router.navigate(['/login']);
  }

  openMenu() {
      $('.menu').removeClass('closed');
      $('.menu').addClass('xs');
      $('.menu-show').addClass('closed');
      $('.backdrop').removeClass('hide');
  }

  closeMenu() {
    $('.menu').addClass('closed');
    $('.menu').removeClass('xs');
    $('.content').addClass('no-menu');
    $('.menu-show').removeClass('closed');
    $('.backdrop').addClass('hide');
  }

}
