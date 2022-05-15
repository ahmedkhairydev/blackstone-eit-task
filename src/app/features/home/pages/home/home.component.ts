import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stories = [
    {
      userName: 'You',
      isActive: false,
      isAdd: true
    },
    {
      userName: 'Supardi',
      isActive: false,
      isAdd: false
    },
    {
      userName: 'Dean',
      isActive: false,
      isAdd: false
    },
    {
      userName: 'Theodore',
      isActive: true,
      isAdd: false
    },
    {
      userName: 'Walter',
      isActive: true,
      isAdd: false
    },
    {
      userName: 'Jesse',
      isActive: true,
      isAdd: false
    },
    {
      userName: 'Enola',
      isActive: true,
      isAdd: false
    }
  ];

  selectedFeedCategoryId: number | null = null;
  feedsCategories = [
    {
      feedCategoryId: null,
      feedName: 'All'
    },
    {
      feedCategoryId: 1,
      feedName: 'Following'
    },
    {
      feedCategoryId: 2,
      feedName: 'Newest'
    },
    {
      feedCategoryId: 3,
      feedName: 'Popular'
    }
  ];
  feeds = [
    {
      feedId: 1,
      feedPhoto: 'avocado.jpg',
      feedUserName: 'Dean Winchester',
      feedLikes: 632,
      feedComments: 64,
      feedCategoryId: 1,
      feedIsLiked: true
    },
    {
      feedId: 2,
      feedPhoto: 'orange.jpg',
      feedUserName: 'Jesse Pinkman',
      feedLikes: 72,
      feedComments: 24,
      feedCategoryId: 1,
      feedIsLiked: false
    },
    {
      feedId: 3,
      feedPhoto: 'papaya.jpg',
      feedUserName: 'Theodore Bagwell',
      feedLikes: 22,
      feedComments: 18,
      feedCategoryId: 2,
      feedIsLiked: true
    },
    {
      feedId: 4,
      feedPhoto: 'strawberry.jpg',
      feedUserName: 'Walter White',
      feedLikes: 48,
      feedComments: 16,
      feedCategoryId: 3,
      feedIsLiked: false
    }
  ];
  feedsFiltered = JSON.parse(JSON.stringify(this.feeds));

  suggestions = [
    {
      suggestionId: 1,
      suggestionUserFullName: 'Sarah Tancredi',
      suggestionUserName: '@dr.sarah',
      suggestionIsFollowing: false
    },
    {
      suggestionId: 2,
      suggestionUserFullName: 'Arthur Shelby',
      suggestionUserName: '@art.shelby',
      suggestionIsFollowing: true
    },
    {
      suggestionId: 3,
      suggestionUserFullName: 'Vin Diesel',
      suggestionUserName: '@vindiesel',
      suggestionIsFollowing: false
    }
  ];

  footerLinks = ['About', 'Help', 'Terms', 'Popular', 'Language'];

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('feeds')) this.feedsFiltered = JSON.parse(localStorage.getItem('feeds') as string);
    if (localStorage.getItem('suggestions')) this.suggestions = JSON.parse(localStorage.getItem('suggestions') as string);
  }

  filterByCategory() {
    if (this.selectedFeedCategoryId) this.feedsFiltered = this.feeds.filter(feed => feed.feedCategoryId === this.selectedFeedCategoryId);
    else this.feedsFiltered = this.feeds;
  }

  like(feedId: number) {
    const feed = this.feedsFiltered.find((feed: any) => feed.feedId === feedId);
    feed.feedIsLiked = !feed.feedIsLiked;

    if (feed.feedIsLiked) {
      feed.feedLikes += 1;
    } else {
      feed.feedLikes -= 1;
    }

    localStorage.setItem('feeds', JSON.stringify(this.feedsFiltered));
    console.log(this.feedsFiltered);
  }

  follow(suggestionId: number) {
    const suggestion: any = this.suggestions.find((feed: any) => feed.suggestionId === suggestionId);
    suggestion.suggestionIsFollowing = !suggestion.suggestionIsFollowing;

    localStorage.setItem('suggestions', JSON.stringify(this.suggestions));
  }
}
