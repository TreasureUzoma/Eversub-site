import Nav from "../components/sectionComponents/Nav";
import HeroTwo from "../components/pagesComponets/HeroTwo";
import QuickLinksTwo from "../components/pagesComponets/QuickLinksTwo";
import Footer from "../components/sectionComponents/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page: React.FC = () => {
  return (
    <>
      <Nav page="faq" />
      <div>
        <HeroTwo pageName="Frequently Asked Questions" bgColor="bg-green-100" />
        <div className="flex justify-center mt-[3rem]">
          <div className="p-2 my_fixed_width">
            <QuickLinksTwo page="faq" />
            <h2 className="text-[1rem] font-semibold mb-4">You have questions? We have answers!</h2>
            <div className="my-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Eversub?</AccordionTrigger>
                  <AccordionContent>
                    Eversub is a bill payment app that allows users to manage and pay subscriptions easily.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    Download the app, sign up with your email, and follow the steps to create your account.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I link multiple payment methods?</AccordionTrigger>
                  <AccordionContent>
                    For now, you can&apos;t.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is my personal information secure?</AccordionTrigger>
                  <AccordionContent>
                    We use encryption and security measures to keep your personal information safe.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I pay my bills?</AccordionTrigger>
                  <AccordionContent>
                    Navigate to the <q>Home Page</q> section, select a bill, and choose a payment method to proceed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Are there any transaction fees?</AccordionTrigger>
                  <AccordionContent>
                    Transaction fees may apply depending on the service needed. Check the app for details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Can I set up automatic payments?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can enable automatic payments for recurring bills in the <q>Settings</q> section.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>How do I update my subscription details?</AccordionTrigger>
                  <AccordionContent>
                    Go to your subscriptions list, select the subscription, and click <q>Edit</q> to make updates.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>What if I miss a payment?</AccordionTrigger>
                  <AccordionContent>
                    If you miss a payment, you will receive reminders till the subscription is sort.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger>Can I cancel a subscription through the app?</AccordionTrigger>
                  <AccordionContent>
                    You can cancel any subscription directly from the app by going to the <q>Settings</q> page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger>Is customer support available?</AccordionTrigger>
                  <AccordionContent>
                    Yes, customer support is available 24/7 through live chat, email, and phone.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger>What payment methods are supported?</AccordionTrigger>
                  <AccordionContent>
                    We only support  bank transfers for now to top-up wallet balance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                  <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                  <AccordionContent>
                    Click on <q>Forgot Password</q> on the login page, and we will guide you through the reset process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
