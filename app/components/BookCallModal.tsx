'use client';

import { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Shield, CheckCircle, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TimeSlot = {
  time: string;
  available: boolean;
};

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const { language } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  const content = {
    en: {
      title: "Schedule Your Free Strategy Call",
      subtitle: "15-minute conversation to understand your needs",
      calendar: {
        title: "Select a Date & Time",
        description: "Choose a convenient slot for your consultation",
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      cta: "Confirm Booking",
      features: [
        { icon: <Shield className="w-4 h-4" />, text: "No credit card required" },
        { icon: <CheckCircle className="w-4 h-4" />, text: "Zero commitment" },
        { icon: <Clock className="w-4 h-4" />, text: "15min call" }
      ]
    },
    es: {
      title: "Agenda tu Llamada Estratégica Gratis",
      subtitle: "15 minutos para entender tus necesidades",
      calendar: {
        title: "Selecciona Fecha y Hora",
        description: "Elige un espacio conveniente para tu consulta",
        days: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      },
      cta: "Confirmar Reserva",
      features: [
        { icon: <Shield className="w-4 h-4" />, text: "Sin tarjeta de crédito" },
        { icon: <CheckCircle className="w-4 h-4" />, text: "Sin compromiso" },
        { icon: <Clock className="w-4 h-4" />, text: "Llamada de 15min" }
      ]
    }
  };

  const t = content[language];

  // Generate dates for current week
  const getDatesForWeek = (startDate: Date) => {
    const dates = [];
    const week = new Date(startDate);
    week.setDate(week.getDate() - week.getDay()); // Start from Sunday

    for (let i = 0; i < 7; i++) {
      dates.push(new Date(week));
      week.setDate(week.getDate() + 1);
    }
    return dates;
  };

  // Generate time slots
  const getTimeSlots = (date: Date): TimeSlot[] => {
    const isToday = new Date().toDateString() === date.toDateString();
    const currentHour = new Date().getHours();

    const slots: TimeSlot[] = [];
    // Business hours: 9 AM to 5 PM
    for (let hour = 9; hour < 17; hour++) {
      // If it's today, only show future slots
      if (!isToday || hour > currentHour) {
        slots.push({
          time: `${hour.toString().padStart(2, '0')}:00`,
          available: Math.random() > 0.3 // Simulate availability
        });
      }
    }
    return slots;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handlePrevWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentWeek(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentWeek(newDate);
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      console.log('Booking:', {
        date: selectedDate.toDateString(),
        time: selectedTime
      });
      // Add your booking logic here
      onClose();
    }
  };

  const weekDates = getDatesForWeek(currentWeek);
  const timeSlots = selectedDate ? getTimeSlots(selectedDate) : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-dark-secondary border border-primary/20 rounded-2xl p-4 sm:p-6 md:p-8 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-md mx-auto relative z-10"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {t.title}
              </h3>
              <p className="text-gray-400">
                {t.subtitle}
              </p>
            </div>

            {/* Calendar Section */}
            <div className="bg-white/5 rounded-xl p-4 sm:p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-semibold text-white">
                  {t.calendar.title}
                </h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevWeek}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-400" />
                  </button>
                  <button
                    onClick={handleNextWeek}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Days of the week */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {t.calendar.days.map((day) => (
                  <div key={day} className="text-center text-xs text-gray-400">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar dates */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {weekDates.map((date, idx) => {
                  const isSelected = selectedDate?.toDateString() === date.toDateString();
                  const isToday = new Date().toDateString() === date.toDateString();
                  const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

                  return (
                    <button
                      key={idx}
                      onClick={() => !isPast && handleDateClick(date)}
                      disabled={isPast}
                      className={cn(
                        'py-2 rounded-lg text-sm transition-colors relative',
                        isPast ? 'text-gray-600 cursor-not-allowed' :
                        isSelected ? 'bg-primary text-white' :
                        isToday ? 'bg-white/10 text-white' :
                        'text-gray-300 hover:bg-white/10'
                      )}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => slot.available && handleTimeClick(slot.time)}
                      disabled={!slot.available}
                      className={cn(
                        'py-2 px-2 rounded-lg text-sm transition-colors',
                        !slot.available ? 'text-gray-600 cursor-not-allowed' :
                        selectedTime === slot.time ? 'bg-primary text-white' :
                        'text-gray-300 hover:bg-white/10'
                      )}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-gray-400">
              {t.features.map((feature, index) => (
                <Fragment key={index}>
                  {index > 0 && <span>•</span>}
                  <span className="flex items-center gap-1">
                    {feature.icon}
                    {feature.text}
                  </span>
                </Fragment>
              ))}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!selectedDate || !selectedTime}
              className={cn(
                'w-full mt-6 py-3 rounded-xl font-semibold transition-colors',
                selectedDate && selectedTime
                  ? 'bg-primary text-white hover:bg-primary-light'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              )}
            >
              {t.cta}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}