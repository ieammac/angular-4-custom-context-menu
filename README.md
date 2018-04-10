## DEMO ::: UI

##### "Introduction":
This is angular 4 maven based project. This is based from Angular-4-with-Protractor-using-Mocks/ui. The needs is for having your own custom context menu without relying on any third partly libs so that you can change whatever you want to change. 

1. This demonstrate how to create a custom context menu in case you need any custom context menu to be build for your project.
2- Currently it does not support multilevel context menu but you can follow the example and extend it to multi level if required.
3- Context menu is dynamic it can grow or it can shrink as per the input
4- Context menu is intelligent to place its position according to the space available on bottom otherwise it moves itself on top of element.
5- Context menu will hide itself after 250 ms if mouseout and it will not hide itself if mouse pointer is on it
6- Context menu will also hide automatically after 2000 ms if no mouseover happened
7- You pass the subject (observable) to handle you call back from when item is clicked from context menu. see item-list.component.ts
 

##### "NOTE":
In case project is not building please delete "node_module" folder and "pacakge-lock.json" files, i had to delete them every time when running ui module using npm directly if i had ran it before using maven and vice versa.  

##### How it works

###### using npm/ng/node directory (Without mock and with backend server)

~ cd ui (if you are at the root of this project)
~ npm install
~ npm run start

- Access the url localhost:4200 from the browser i used chrome click on the link you will the context menu


Following tag is you need to add in other component and corresponding logic in their typescript see the item-list.component.html and item-list.component.ts for illustration purpose 
<div *ngIf="contextMenuView.show==true">
  <app-contextmenu [data]="contextMenuView"></app-contextmenu>
</div>
