import $ from 'jquery';
import MobileMenu from './modules/_MobileMenu';
import RevealOnScroll from './modules/_RevealOnScroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '80%');
new RevealOnScroll($('.testimonial'), '60%');