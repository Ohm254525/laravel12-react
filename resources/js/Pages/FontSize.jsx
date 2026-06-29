import BootstrapLayout from "@/Layouts/BootstrapLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function FontSize() {
    const [fontSize, setFontSize] = useState(16);

    const increase = () => setFontSize(fontSize + 2);

    const decrease = () => {
        if (fontSize > 12) {
            setFontSize(fontSize - 2);
        }
    };

    const reset = () => setFontSize(16);

    return (
        <BootstrapLayout>
            <Head title="Font Size Example" />

            <div className="container mt-4">
                <h2>ตัวอย่างการเปลี่ยนขนาดตัวอักษรด้วย State</h2>

                <button
                    className="btn btn-success me-2"
                    onClick={increase}
                >
                    A+
                </button>

                <button
                    className="btn btn-warning me-2"
                    onClick={decrease}
                >
                    A-
                </button>

                <button
                    className="btn btn-secondary"
                    onClick={reset}
                >
                    Reset
                </button>

                <hr />

                <p style={{ fontSize: `${fontSize}px` }}>
                    React State ช่วยให้การเปลี่ยนแปลงข้อมูลบนหน้าจอเกิดขึ้นแบบอัตโนมัติ
                    เมื่อค่าของ State เปลี่ยน Component จะ Render ใหม่ทันที
                </p>

                <p>ขนาดตัวอักษรปัจจุบัน : {fontSize}px</p>
            </div>
        </BootstrapLayout>
    );
}