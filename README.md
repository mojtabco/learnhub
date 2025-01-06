# LearnHub

**LearnHub** is an online educational platform developed with Django. It allows instructors to create, manage, and share courses, while students can track their progress and obtain certificates. The platform supports detailed access control and provides a feature-rich learning experience.

## 🚀 Features

- **User Management**: Custom user profiles with additional fields like bio, website, and profile picture.
- **Course Creation**: Instructors can create and manage courses with detailed descriptions, tags, and thumbnails.
- **Lesson Management**: Each course can include multiple lessons with specific durations, content, and order.
- **Progress Tracking**: Tracks student progress by calculating the percentage of completed lessons.
- **Certificate Generation**: Issues certificates once a student completes a course.
- **Access Control**: Fine-grained control over course access for specific users or groups.
- **Quote Management**: Feature to add motivational quotes with likes functionality.
- **History Logging**: Logs user login history with IP addresses and timestamps.

### Technologies Used in Frontend
- **HTML5, CSS3, JavaScript**: The core technologies used to build the frontend of LearnHub.
- **Bootstrap**: For responsive layout and styling.
- **Django Templates**: For rendering dynamic content from the backend to the frontend.

### Backend Architecture
- **Django REST Framework**: Used to build a robust and scalable RESTful API.
- **Function-Based Views**: Simplifies logic and enhances flexibility for handling HTTP requests.

## 🛠️ Models Overview

### 1. **UserLoginHistory**
Tracks user login activities:
- `user`: Reference to the user.
- `login_time`: Login timestamp.
- `last_activity`: Timestamp of the last activity.
- `logout_time`: Logout timestamp.
- `ip_address`: User's IP address.

### 2. **ProfileUser**
Stores additional user information:
- `user`: Linked to the default User model.
- `bio`, `website`, `profile_picture`, `gender`: Profile details.
- `is_active`, `is_published`: Status flags.
- `access_groups`: User groups with specific access permissions.
- `access_users`: Specific permissions granted to the user.

### 3. **Course**
Represents educational courses:
- `subcategory`, `title`, `description`: Basic details.
- `thumbnail`: Visual representation.
- `owner`: Linked to the creator (User).
- `is_published`, `completed`, `certified`: Course status.
- `lesson_count`, `likes`, `tag`: Statistics and categorization.

### 4. **CourseSeason**
Defines the different seasons (sub-courses) within a course:
- `course`: Associated course.
- `title`, `description`, `order`: Season details.
- `lesson_count`: Number of lessons in the season.

### 5. **Lesson**
Represents individual lessons within courses:
- `course_season`: Linked to the season of the course.
- `title`, `description`, `duration`, `order`: Lesson details.
- `thumbnail`: Lesson image.
- `lesson_content`: Main content of the lesson.
- `likes`: Users who liked the lesson.
- `completed`: Users who completed the lesson.

### 6. **StudentProgress**
Tracks student progress in a course:
- `student`: Linked to the user.
- `course`: Associated course.
- `completed_lessons_count`: Number of completed lessons for the course.

### 7. **Certificate**
Represents certificates issued for course completion:
- `student`: Linked to the user.
- `course`: Associated course.
- `date_of_issue`: Timestamp of certificate issuance.
- `certificate_status`: Status of the certificate (Pending or Issued).
- `certificate_file`: The actual certificate file.
- `certificate_code`: A unique code for each certificate.

### 8. **Category & SubCategory**
Defines the categories and subcategories for organizing courses:
- `Category`: Main categories like Programming, Design, etc.
- `SubCategory`: Subcategories that belong to a category.

### 9. **SiteAccessGroup & SiteAccessUser**
Defines groups and user permissions for course access:
- `SiteAccessGroup`: Groups with specific permissions.
- `SiteAccessUser`: Permissions granted to specific users.

### 10. **Quote**
Stores inspirational quotes with like functionality:
- `category`: Category of the quote.
- `quote`: The quote text.
- `quote_speaker`: The speaker of the quote.
- `likes`: Users who liked the quote.

### 11. **CourseAccess**
Controls access to courses based on users and groups:
- `course`: Associated course.
- `access_users`: Users who have access to the course.
- `access_groups`: Groups with access to the course.

## 📂 Project Structure

- **Static and Media Files**: Stored in `/vol/static/` and `/vol/media/`.
- **Database**: SQLite for lightweight and fast development.
- **Frontend**: Simple HTML/CSS templates with responsive design.

## 🌐 Deployment

The project is deployed on a Linux Ubuntu server with the following configuration:
- **Server IP**: `localhost`
- **Project Path**: `/home/ubuntu/learnhub/`

## 🔧 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mojtabco/learnhub.git
   cd learnhub
   docker-compose -f app-learnhub.yml up -d --build
   sh create_superuser.sh


## CSV Import for Categories, SubCategories, and Quotes

- **CSV Import**: Import `Category`, `SubCategory`, and `Quote` data directly from CSV files through the Django Admin Panel.

### Introduction
The LearnHub admin panel supports importing data for the following models using CSV files:

- **Category**: Categories of courses (e.g., Programming, Business, Design)
- **SubCategory**: Subcategories related to each category (e.g., Python under Programming)
- **Quote**: Motivational or educational quotes (e.g., "The only way to do great work is to love what you do." – Steve Jobs)

### Steps for Importing Data via Admin Panel

1. **Login to Admin Panel**: 
   After setting up the project, log in to the Django Admin Panel.

2. **Navigate to Models**:
   In the Admin Panel, find the following sections:
   - **Category**: Manage categories for courses.
   - **SubCategory**: Manage subcategories under each category.
   - **Quote**: Manage quotes for educational or motivational purposes.

3. **Upload CSV File**:
   Each section (Category, SubCategory, and Quote) has an **Import** button that allows you to upload a CSV file. 
   - Click the **Import** button for the relevant model.
   - Select the CSV file you want to upload.
   - The data in the file will be processed and automatically added to the respective model.

## 📄 License
    This project is licensed under the MIT License. See the LICENSE file for details.


### ✨ Feel free to contribute to this project or suggest improvements!
### 🌟 Star this repository if you find it helpful!

