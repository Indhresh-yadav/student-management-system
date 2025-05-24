import org.jsp.springbootstudentmanagement.service.OtpService;
import org.jsp.springbootstudentmanagement.util.Otputil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/indhreshyadav")
@CrossOrigin
public class OtpController {

    @Autowired
    private OtpService otpService;

    @Autowired
    private Otputil otputil;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserRegistrationRequest request) {
        String phone = request.getPhone();
        String otp = otputil.generateOtp();
        String sid = otpService.sendOTP(phone, otp);
        return ResponseEntity.ok("OTP sent to " + phone + ". SID: " + sid);
    }
}

