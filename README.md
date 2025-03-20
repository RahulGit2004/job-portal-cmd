# 🚀Job Portal for Technical Graduates 

The Job Portal for Technical Graduates is a web-based platform that connects technical graduates with internship, part-time, and permanent job opportunities. It also offers resume-building services, and ensures a seamless recruitment process for employers. 

---

## 📌Core Features  

🛡️**User Authentication & Management**
- Sign-up/Login using email.
- Secure profile creation and account management.

📊**Role-Based Dashboards**

1. **Employer Dashboard:**
- Post job listings and internships.
- Access the data of candidates.
 
2. **Candidate Dashboard:**
- Apply for jobs, internships, and industrial visits.
- Upload and manage resumes.
- College Dashboard:
- Apply for internships and industrial visits.

3. **Admin Dashboard:**
- Manage candidate,employer and another admin.
- Approve/remove job postings and internships.
- Set pricing and offer discounts for paid services.

📝 **Job Posting & Application System**
- Employers can post jobs and internships.
- Candidates can apply.
- Employers can review and shortlist applications.

⚙️ **Admin Control & Pricing Management**
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
  "firstName": "Rahul",
  "lastName": "Kumar Sinha",
  "email": "rahulkrs2017@gmail.com",
  "phoneNumber": "8809208891",
  "employmentStatus": "Employed",
  "education": "B.Tech in Computer Science",
  "position": "Software Developer",
  "resume": "https://example.com/resume.pdf"
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
git clone https://github.com/your-username/Job-Portal-Engineering-Graduates
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
