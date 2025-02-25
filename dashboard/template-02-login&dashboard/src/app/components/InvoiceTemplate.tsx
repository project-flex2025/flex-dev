import React from "react";

export default function PayslipTemplate({ payslipData }) {
    return (
        <div id="payslip-content" className="p-4 border bg-white">
            <div className="d-flex justify-content-between">
                <h2><strong>Payslip</strong></h2>
                <div className="text-end">
                    <img src="/company-logo.png" alt="Company Logo" style={{ height: "50px" }} />
                    <p className="fw-bold">{payslipData.companyName}</p>
                    <p>{payslipData.companyAddress}</p>
                </div>
            </div>

            <div className="mt-3">
                <p><strong>{payslipData.employeeName}</strong></p>
                <p>{payslipData.employeeAddress}</p>
            </div>

            <table className="table mt-3">
                <tbody>
                    <tr>
                        <td><strong>Payroll Date</strong><br />{payslipData.payrollDate}</td>
                        <td><strong>NI Number</strong><br />{payslipData.niNumber}</td>
                    </tr>
                    <tr>
                        <td><strong>Payment Period</strong><br />{payslipData.paymentPeriod}</td>
                        <td><strong>Tax Code</strong><br />{payslipData.taxCode}</td>
                    </tr>
                </tbody>
            </table>

            <table className="table mt-3 border">
                <thead>
                    <tr className="bg-light">
                        <th>Payments</th>
                        <th>Deductions</th>
                        <th>Year to Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{payslipData.basicPay.toFixed(2)}</td>
                        <td>Tax Deducted: {payslipData.taxDeducted.toFixed(2)}</td>
                        <td>Gross Pay: {payslipData.grossPay.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>NI Contribution: {payslipData.niContribution.toFixed(2)}</td>
                        <td>Tax Paid: {payslipData.taxPaid.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>

            <div className="d-flex justify-content-between mt-3">
                <p><strong>Total Payments: </strong>£{payslipData.basicPay.toFixed(2)}</p>
                <p><strong>Total Deductions: </strong>£{(payslipData.taxDeducted + payslipData.niContribution).toFixed(2)}</p>
                <p><strong>Net Pay: </strong>£{payslipData.netPay.toFixed(2)}</p>
            </div>
        </div>
    );
}
