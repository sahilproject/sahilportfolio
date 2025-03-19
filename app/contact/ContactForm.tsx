"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Box, Button, TextField, InputAdornment, Stack, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";
// import EmailIcon from "@mui/icons-material/Email";



const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [tech, setTech] = useState("");
  const [isSent, setIsSent] = useState(false);

  
  const handleChange = (event: SelectChangeEvent) => {
    setTech(event.target.value);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_h47i3re",
          "template_xv30v5t",
          form.current,
          "wQKzlegMqt9a2-gNX"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSent(true);
            e.currentTarget.reset();
            setTimeout(() => setIsSent(false), 5000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };


  return (
    <div className=" rounded-lg p-3 sm:p-6">
      <h2
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold"
      >
        Let&apos;s Work Together!
      </h2>
      <p
        data-aos="fade-right"
        className="text-black mt-3 lg:text-base text-xs md:text-sm"
      >
        Let&apos;s collaborate to build a dynamic website! Teamwork sparks fresh ideas, creativity, and success.
      </p>

      <div className="cont mt-5 " data-aos="fade-right">
        <Box sx={{ m: "auto" }}>
          <div className="cont-box contact-border">
            <form ref={form} onSubmit={sendEmail}>
              <Stack spacing={1}>
                <TextField
                  name="from_name"
                  sx={{  input: { color: "black" } }}
                  placeholder="First name"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "gray" }}>
                        {/* <PersonIcon /> */}
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  name="last_name"
                  sx={{ input: { color: "black" } }}
                  placeholder="Last name"
                  type="text"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "gray" }}>
                        {/* <PersonIcon /> */}
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  name="email"
                  sx={{  input: { color: "black" } }}
                  placeholder="Email"
                  type="email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "gray" }}>
                        {/* <EmailIcon /> */}
                      </InputAdornment>
                    ),
                  }}
                />

                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  Select Technology
                </InputLabel>
                <Select
                  name="technology"
                  sx={{ color: "black" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tech}
                  onChange={handleChange}
                >
                  <MenuItem value="React js">React js</MenuItem>
                  <MenuItem value="Next js">Next js</MenuItem>
                </Select>

                <TextField
                  name="message"
                  sx={{  input: { color: "black" } }}
                  placeholder="Write Message"
                  type="text"
                  variant="outlined"
                />

                <Box sx={{ textAlign: "center" }}>
                  <Button
                    id="s-btn"
                    type="submit"
                    variant="outlined"
                    color="success"
                    style={{
                      width: "150px",
                      backgroundColor: "#0c96ff",
                      color: "white",
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
                {isSent && (
                  <p className="text-green-500 text-center mt-2">
                    Message sent successfully!
                  </p>
                )}
              </Stack>
            </form>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ContactForm;
