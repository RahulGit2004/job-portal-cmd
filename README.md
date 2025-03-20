# 🚀Job Portal for Technical Graduates 

The Job Portal for Technical Graduates is a web-based platform that connects technical graduates with internship, part-time, and permanent job opportunities. It also offers resume-building services, facilitates industrial visits, and ensures a seamless recruitment process for employers and colleges. 

---

## 📌Core Features  

- 🛡️**User Authentication & Management**
- Sign-up/Login using email or phone OTP.
- Secure profile creation and account management.

- 📊**Role-Based Dashboards**

1. **Employer Dashboard:**
- Post job listings and internships.
- Free posting for the first five job posts, then paid.
- Paid access to candidate resumes and contact details.

2. **Candidate Dashboard:**
- Apply for jobs, internships, and industrial visits.
- Upload and manage resumes.
- Access paid resume-building services.
- College Dashboard:
- Apply for internships and industrial visits.
- Upload and manage student databases.
- Admin Dashboard:
- Manage candidate, employer, and college data.
- Approve/remove job postings, internships, and industrial visits.
- Set pricing and offer discounts for paid services.
- Add promotional sales posters and upload job certifications.

- 📄 **Resume Building Service**
- Paid feature for candidates.
- Multiple customizable template options.

- 📝 **Job Posting & Application System**
- Employers can post jobs, internships, and industrial visits.
- Candidates and colleges can apply.
- Employers can review and shortlist applications.

- 💳 **Payments & Subscriptions**
- Employer payments for exceeding free job post limits.
- Resume visibility fees for employers.
- Secure payment gateway integration.

- ⚙️ **Admin Control & Pricing Management**
- Admin can set/modify pricing for services.
- Admin can add/remove user data.

---

## 📂 Project Structure  
```sh
job-portal/
│── backend/                  # Backend API and business logic
│   ├── models/               # Database models
│   ├── routes/               # API routes and endpoints
│   ├── controllers/          # Handles application logic
│   └── server.js             # Main backend entry point
│
│── frontend/                 # React frontend for user interfaces
│   ├── src/
│   │   ├── assets/           # Related Images
│   │   ├── components/       # Reusable UI components
│   │   └── App.js            # Main React component
│── package.json              # Project dependencies
│── .env                      # Environment variables
│── README.md                 # Documentation

```

---
## Request(Example)
```sh
POST /api/apply
{
  "job_id": "123456",
  "candidate_id": "78910",
  "resume_link": "https://www.example.com/resume.pdf"
}

```
---
## Response(Example)
{
  "message": "Application submitted successfully",
  "status": "success"
}


---
## 🛠️ Installation & Setup  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/job-portal.git
cd job-portal

```
### **2️⃣ Install Backend Dependencies**
# Navigate to backend directory 
```sh
cd backend
npm install
```
### **3️⃣ Install Frontend Dependencies**
 ```sh
npm install
```
### **5️⃣ Run Backend Server**
# Run backend server
```sh
cd backend
Node index.js
```
### **6️⃣ Run Frontend Server**
# Run frontend server
```sh
npm run dev
```



## 📄 License
This project is open-source and available under the MIT License.


---
