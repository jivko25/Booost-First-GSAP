import gsap from 'gsap/all';

export default class Monster{
    constructor(element) {
        this.element = element;
        this.hovered = false;
      }
    
      expand() {
        gsap.to(this.element, { width: '80%', id: 'expand', duration: 0.5 });
      }
    
      contract() {
        gsap.to(this.element, { width: '4%', id: 'contract', duration: 0.5 });
      }
    
      reset() {
        gsap.to(this.element, { width: '16.6%', id: 'reset', duration: 0.5 });
      }
    }