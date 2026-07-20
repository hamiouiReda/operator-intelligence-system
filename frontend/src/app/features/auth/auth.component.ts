import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="auth-container">
      <div class="auth-box">
        <div class="auth-header">
          <div class="auth-logo">OIS</div>
          <h1>Welcome Back</h1>
        </div>

        <form class="auth-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" />
          </div>

          <button type="submit" class="auth-button">Sign In</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: linear-gradient(135deg, #0B0F19 0%, #131A2A 100%);
    }

    .auth-box {
      background-color: #131A2A;
      border: 1px solid rgba(148, 163, 184, 0.1);
      border-radius: 16px;
      padding: 40px;
      width: 100%;
      max-width: 400px;
    }

    .auth-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .auth-logo {
      display: inline-block;
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 16px;
    }

    .auth-header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      color: #F8FAFC;
    }

    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-group label {
      font-size: 13px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .form-group input {
      padding: 10px 12px;
      background-color: rgba(148, 163, 184, 0.1);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 8px;
      color: #F8FAFC;
      font-size: 14px;
      transition: all 0.2s ease;
    }

    .form-group input:focus {
      outline: none;
      border-color: #3B82F6;
      background-color: rgba(148, 163, 184, 0.15);
    }

    .form-group input::placeholder {
      color: #94A3B8;
    }

    .auth-button {
      padding: 12px 16px;
      background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
      border: none;
      border-radius: 8px;
      color: white;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 8px;
    }

    .auth-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
    }
  `],
})
export class AuthComponent {}
