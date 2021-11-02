import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BannersService } from '../banner.service';

@Component({
  selector: 'app-banners-container',
  templateUrl: './banners-container.component.html',
  styleUrls: ['./banners-container.component.scss'],

})
export class BannersContainerComponent {
  components: any = [];
  @ViewChild('banners', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(
    public bannersService: BannersService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    this.bannersService.bannersToAdd$.subscribe((el) => {
      this.loadComponent(el);
    });
    this.bannersService.bannersToRemove$.subscribe((el) => {
      if(el){
      this.removeComponent(el);
      }
    });
  }
  ngOnDestroy(): void {
    for (let x = 0; x < this.components.length; ++x) {
      this.components[x].destroy();
    }
  }

  private loadComponent(el: any): void {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(el);
    const x = this.container.createComponent(componentFactory);
    this.components.push(x);
    x.changeDetectorRef.detectChanges();

  }

  private removeComponent(el: any): void {
    const component = this.components.find(
      (c : any) => c.instance instanceof el
    );
    const componentIndex = this.components.indexOf(component);
    if (componentIndex !== -1) {
      this.container.remove(this.container.indexOf(component.hostView as any));
      this.components.splice(componentIndex, 1);
    }
  }
}
