import React, { useState, useEffect } from "react";

const Quiz4 = () => {
    // 1. สร้าง State สำหรับเก็บข้อมูลหนังสือ
    const [books, setBooks] = useState([]);

    // 2. ฟังก์ชัน Fetch API ดึงข้อมูลจากระบบหลังบ้าน
    const loadData = async () => {
        try {
            const response = await fetch("/api/books");
            const data = await response.json();
            setBooks(data); // บันทึกข้อมูลลง State
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
        }
    };

    // 3. สั่งให้ฟังก์ชันทำงานทันทีเมื่อเปิดหน้าเว็บ
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "0 auto" }}>
            <h1 style={{ marginBottom: "10px", color: "#333" }}>Book List (Quiz 4)</h1>
            <p style={{ color: "#666", marginBottom: "30px" }}>แสดงข้อมูลจากตารางฐานข้อมูลโดยใช้ Fetch API</p>
            
            <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#1e293b", color: "#ffffff" }}>
                            <th style={{ padding: "15px", border: "1px solid #cbd5e1" }}>ID</th>
                            <th style={{ padding: "15px", border: "1px solid #cbd5e1" }}>Title</th>
                            <th style={{ padding: "15px", border: "1px solid #cbd5e1" }}>Author</th>
                            <th style={{ padding: "15px", border: "1px solid #cbd5e1" }}>Category</th>
                            <th style={{ padding: "15px", border: "1px solid #cbd5e1" }}>Published Year</th>
                            <th style={{ padding: "15px", border: "1px solid #cbd5e1" }}>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.length > 0 ? (
                            books.map((book) => (
                                <tr key={book.id} style={{ backgroundColor: book.id % 2 === 0 ? "#f8fafc" : "#ffffff" }}>
                                    <td style={{ padding: "15px", border: "1px solid #e2e8f0" }}>{book.id}</td>
                                    <td style={{ padding: "15px", border: "1px solid #e2e8f0", fontWeight: "bold" }}>{book.title}</td>
                                    <td style={{ padding: "15px", border: "1px solid #e2e8f0" }}>{book.author}</td>
                                    <td style={{ padding: "15px", border: "1px solid #e2e8f0" }}><span style={{ background: "#e2e8f0", padding: "4px 8px", borderRadius: "4px", fontSize: "14px" }}>{book.category}</span></td>
                                    <td style={{ padding: "15px", border: "1px solid #e2e8f0" }}>{book.published_year}</td>
                                    <td style={{ padding: "15px", border: "1px solid #e2e8f0", color: "#0f766e", fontWeight: "bold" }}>฿{book.price}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" style={{ padding: "30px", textAlign: "center", color: "#94a3b8" }}>
                                    กำลังโหลดข้อมูล หรือ ไม่มีข้อมูลในฐานข้อมูล...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Quiz4;
