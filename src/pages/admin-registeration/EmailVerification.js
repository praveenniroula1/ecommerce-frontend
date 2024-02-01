import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Alert, Card, Container, Spinner } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import { useSearchParams } from "react-router-dom";
import { emailVerifyUser } from "../../helper/axiosHelper";

const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  const [isPending, setIsPending] = useState(true);
  const [response, setResponse] = useState(true);
  console.log(queryParams.get("e"));

  useEffect(() => {
    const obj = {
      emailValidationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };

    (async () => {
      const result = await emailVerifyUser(obj);
      setResponse(result);
      setIsPending(false);
    })();
  }, []);

  return (
    <div>
      <Header />
      <Container className="page-main">
        {isPending && (
          <Card className="mt-4 p-3 w-50 m-auto fw-bold text-center bg-secondary text-light">
            <Spinner
              className="m-auto fs-1 fw-bold"
              animation="border"
              variant="warning"
            />
            Email Verification Process has now began.....Hold Tight!!!{" "}
          </Card>
        )}

        {response.message && (
          <Alert
            className="mt-4 p-3 w-50 m-auto fw-bold text-center bg-danger text-light"
            variant={response.status === "success" ? "success" : "danger"}
          >
            {response.message}
          </Alert>
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default EmailVerification;
