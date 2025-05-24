package org.jsp.springbootstudentmanagement.service;

import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;



@Service
public class PaymentService {

    public ResponseEntity<Object> createOrder(int amount) {
        try {
            RazorpayClient client = new RazorpayClient("rzp_test_uzPSq4hTyECnmv", "5VrRarJQUgrTXFqBov0McoCB");

            JSONObject orderRequest = new JSONObject();
            orderRequest.put("amount", amount * 100); // in paise (e.g., ₹1 = 100 paise)
            orderRequest.put("currency", "INR");
            orderRequest.put("receipt", "txn_123456");
            orderRequest.put("payment_capture", 1); // Auto capture

            Order order = client.orders.create(orderRequest);

            return new ResponseEntity<>(order.toString(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Payment Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
