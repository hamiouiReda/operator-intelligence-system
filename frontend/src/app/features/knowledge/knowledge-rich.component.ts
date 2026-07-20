import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  BadgeComponent,
  FormInputComponent,
  ButtonComponent,
  TableComponent,
  BreadcrumbComponent,
} from '@app/shared/components';
import { TableColumn } from '@app/shared/components';

interface KnowledgeItem {
  id: string;
  title: string;
  category: string;
  updated: string;
}

@Component({
  selector: 'app-knowledge-rich',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    BadgeComponent,
    FormInputComponent,
    ButtonComponent,
    TableComponent,
    BreadcrumbComponent,
  ],
  template: `
    <div class="knowledge-container">
      <app-breadcrumb [items]="breadcrumbItems" class="breadcrumb"></app-breadcrumb>

      <div class="page-header">
        <div class="header-content">
          <h1>Knowledge Base</h1>
          <p>Your operational wiki and second brain</p>
        </div>
        <div class="header-actions">
          <app-button variant="primary">➕ New Article</app-button>
        </div>
      </div>

      <!-- Search -->
      <div class="search-section">
        <app-form-input
          type="text"
          placeholder="Search knowledge base..."
          [value]="searchQuery"
          (valueChange)="searchQuery = $event"
        ></app-form-input>
      </div>

      <!-- Navigation -->
      <div class="tabs-container">
        <div class="tab-list">
          <button
            *ngFor="let tab of tabs"
            [class.active]="activeTab === tab"
            (click)="activeTab = tab"
            class="tab-button"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Categories -->
      <section *ngIf="activeTab === 'Browse'" class="knowledge-section">
        <div class="categories-grid">
          <app-card
            *ngFor="let cat of categories"
            [title]="cat.name"
            [badge]="cat.count + ' articles'"
            isClickable
            (cardClick)="selectCategory(cat.id)"
          >
            <p class="category-description">{{ cat.description }}</p>
          </app-card>
        </div>
      </section>

      <!-- Articles List -->
      <section *ngIf="activeTab === 'Articles'" class="knowledge-section">
        <h2>Recent Articles</h2>
        <app-table
          [data]="articles"
          [columns]="articleColumns"
        ></app-table>
      </section>

      <!-- Favorites -->
      <section *ngIf="activeTab === 'Favorites'" class="knowledge-section">
        <h2>Favorite Articles</h2>
        <div class="favorites-grid">
          <app-card
            *ngFor="let fav of favoriteArticles"
            [title]="fav.title"
            [subtitle]="fav.category"
          >
            <p class="article-preview">{{ fav.preview }}</p>
          </app-card>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .knowledge-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .breadcrumb {
      margin-bottom: 24px;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 32px;
    }

    .page-header h1 {
      margin: 0 0 8px 0;
      font-size: 32px;
      font-weight: 700;
      color: #F8FAFC;
    }

    .page-header p {
      margin: 0;
      color: #94A3B8;
      font-size: 14px;
    }

    .search-section {
      margin-bottom: 32px;
    }

    .tabs-container {
      margin-bottom: 32px;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .tab-list {
      display: flex;
      gap: 0;
    }

    .tab-button {
      padding: 12px 16px;
      background: none;
      border: none;
      color: #94A3B8;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease;
      margin-bottom: -1px;
    }

    .tab-button.active {
      color: #3B82F6;
      border-bottom-color: #3B82F6;
    }

    .knowledge-section {
      animation: fadeIn 0.3s ease;
    }

    h2 {
      margin: 0 0 20px 0;
      font-size: 18px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 16px;
    }

    .category-description {
      margin: 0;
      font-size: 13px;
      color: #94A3B8;
      line-height: 1.6;
    }

    .favorites-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
    }

    .article-preview {
      margin: 0;
      font-size: 12px;
      color: #94A3B8;
      line-height: 1.5;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `],
})
export class KnowledgeRichComponent implements OnInit {
  breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Knowledge' },
  ];

  tabs = ['Browse', 'Articles', 'Favorites'];
  activeTab = 'Browse';
  searchQuery = '';

  categories = [
    { id: '1', name: 'Getting Started', count: 12, description: 'Onboarding guides and tutorials' },
    { id: '2', name: 'API Reference', count: 45, description: 'Complete API documentation' },
    { id: '3', name: 'Best Practices', count: 28, description: 'Tips and operational guidelines' },
    { id: '4', name: 'Troubleshooting', count: 34, description: 'Common issues and solutions' },
  ];

  articles: KnowledgeItem[] = [
    { id: '1', title: 'Getting Started with OIS', category: 'Getting Started', updated: '2 days ago' },
    { id: '2', title: 'API Authentication Guide', category: 'API Reference', updated: '1 week ago' },
    { id: '3', title: 'Mission Management Best Practices', category: 'Best Practices', updated: '3 days ago' },
  ];

  articleColumns: TableColumn<KnowledgeItem>[] = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    { key: 'updated', label: 'Updated', sortable: true },
  ];

  favoriteArticles = [
    {
      id: '1',
      title: 'Quick Start Guide',
      category: 'Getting Started',
      preview: 'Learn the basics in 10 minutes',
    },
    {
      id: '2',
      title: 'Authentication Best Practices',
      category: 'Security',
      preview: 'Secure your API integrations',
    },
    {
      id: '3',
      title: 'Performance Optimization',
      category: 'Best Practices',
      preview: 'Improve system performance',
    },
  ];

  ngOnInit(): void {
    console.log('Knowledge base initialized');
  }

  selectCategory(categoryId: string): void {
    console.log('Selected category:', categoryId);
  }
}
