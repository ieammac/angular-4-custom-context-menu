import {Component, OnInit} from '@angular/core';
import {ContextMenuView, MenuItem} from "../model/context-menu-data";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";

@Component({
    selector: 'item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.scss']
})
export class ItemListComponent implements OnInit {
    contextMenuView: ContextMenuView; // this needs to be defined in component level because it will be access from html



    constructor(private router: Router) {
        this.contextMenuView = new ContextMenuView(); // must have been constructed in here so that show property is available
    }

    ngOnInit() {
    }



    public showContextMenu (event) {

        let subject = new Subject<any>();
        this.subscribeForAction(subject);

        // construct the contextMenuView with (action menu items and the mouse event)
        this.contextMenuView.mouseEvent = event; // mouse event
        this.contextMenuView.menuItems = this.buildMenuItems(subject);
        this.contextMenuView.show=true; // will show the context menu (hiding will be handled by context menu itself)


    }

    private buildMenuItems(subject: Subject<any>){
        let items:MenuItem[] = [];

        items.push(new MenuItem("item 1", "item 1", subject));
        items.push(new MenuItem("item 2", "item 2", subject));
        items.push(new MenuItem("item 3", "item 3", subject));
        items.push(new MenuItem("item 4", "item 4", subject));

        return items;
    }

    private subscribeForAction(subject: Subject<any>){
        let ovservable = subject.asObservable()

        ovservable.subscribe((item) => {
            console.log("Item Subscription got", item); // Subscription wont get
            // anything at this point
            if (item.value === 'item 4') { // in case if item is number 4 then i want to do something else
                this.router.navigateByUrl('/google');
            }
        });
    }
}
